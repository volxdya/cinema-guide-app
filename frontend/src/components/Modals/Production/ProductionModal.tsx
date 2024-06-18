import {Formik} from "formik";
import {ProductionForm} from "./Form.tsx";
import {initialState} from "../../../validation-helpers/prodiction-helper.ts";


export function ProductionModal() {
    return (
        <Formik
            initialValues={initialState}
            onSubmit={() => {
            console.log("qwer");
        }}>
            <ProductionForm/>
        </Formik>
    )
}