import ContactsItem from "../components/ContactsItem";
import { useDocumentTitle } from "../functions/useDocumentTitle";

const Contacts = () => {
	useDocumentTitle("Контакты | ОИК");
	return (
		<>
			<div className="margin-top">
				<ContactsItem />
			</div>
		</>
	);
};

export default Contacts;
