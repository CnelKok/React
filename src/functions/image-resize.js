import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = process.argv[2];
if (!inputDir) {
	console.error("Укажите путь к папке с изображениями: node image-resize.js /path/to/images");
	process.exit(1);
}

const extensions = [".jpg", ".jpeg", ".png", ".tiff", ".webp"];
const outputDir = path.join(inputDir, "resized");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.readdir(inputDir, (err, files) => {
	if (err) throw err;

	files.forEach(async (file) => {
		const ext = path.extname(file).toLowerCase();
		if (!extensions.includes(ext)) return;

		const name = path.basename(file, ext);
		const inputPath = path.join(inputDir, file);

		try {
			const image = sharp(inputPath).withMetadata();
			const meta = await image.metadata();
			const origWidth = meta.width || 0;

			const variants = [
				{ suffix: "_medium.webp", width: 768, webpOptions: { quality: 90 } },
				{ suffix: "_small.webp", width: 480, webpOptions: { quality: 90 } },
				{
					suffix: "_placeholder.webp",
					width: 20,
					webpOptions: { quality: 50 },
					blur: 1,
					resizeKernel: sharp.kernel.nearest,
				},
			];

			variants.forEach(async ({ suffix, width: targetW, webpOptions, blur, resizeKernel }) => {
				if (origWidth <= targetW + 200) {
					console.log(`${name}${suffix} пропущен (оригинал ${origWidth}px)`);
					return;
				}

				let pipeline = sharp(inputPath)
					.withMetadata()
					.resize({
						width: targetW,
						kernel: resizeKernel || sharp.kernel.lanczos3,
						withoutEnlargement: true,
					});

				if (blur) {
					pipeline = pipeline.blur(blur);
				}

				await pipeline.webp(webpOptions).toFile(path.join(outputDir, `${name}${suffix}`));

				console.log(`${name}${suffix} создан (${targetW}px)`);
			});
		} catch (error) {
			console.error(`Ошибка обработки ${file}:`, error);
		}
	});
});
