import * as yup from "yup";

export default yup.object().shape({
    name: yup.string().required("Needs a name.").matches().min(2),
    size: yup.string().required("Pick a size."),
    pepps: yup.boolean().oneOf([true,false],"choose one topping"),
    jpepps: yup.boolean().oneOf([true,false],"choose one topping"),
    gpepps: yup.boolean().oneOf([true,false],"choose one topping"),
    bpepps: yup.boolean().oneOf([true,false],"choose one topping"),
    specialInstructions: yup.string().notRequired()
})