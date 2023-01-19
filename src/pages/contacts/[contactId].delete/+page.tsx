import {redirect} from "react-router-dom";
import {deleteContact} from "../../../data/contacts";

export async function action({params}: any) {
    throw new Error("oh dang!");
    await deleteContact(params.contactId);
    return redirect("/");
}

export function errorElement() {
    return (
        <div>Oops! There was an error.</div>
    )
}