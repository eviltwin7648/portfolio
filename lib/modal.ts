import { model, models, Schema } from "mongoose";

const FormDataSchema = new Schema({
    name: String,
    email: String,
    website: String,
    description: String
})

const Form =models.form || model('form', FormDataSchema);

export default Form;