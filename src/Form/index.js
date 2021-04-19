import React from "react";

const Form =({ form, update, submit, disabled, error }) => {

    //event handler for all changes to the <form>
    const onChange = (event) => {

        const name = event.target.name;
        const value = event.target.value
        
        if ( event.target.type === "checkbox" ) {
            const value = event.target.checked
            update(name,value)
        }else{
            update(name,value)
        }
    }

    //onSubmit event handler
    const onSubmit = (event) => {
        event.preventDefault()
        submit()
    }

    return (
        <div id="form">
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input type="text" name="name" onChange={onChange} value={form.name}/>
                    <div id="error">{error.name}</div>
                </label>

                <label>Size:
                    <select onChange={onChange} name="size" value={form.size}>
                        <option value=''>Select Size</option>
                        <option value='slice'>Slice</option>
                        <option value='personal'>Personal</option>
                        <option value='large'>Large</option>
                        <option value='xlarge'>XLarge</option>
                    </select>
                    <div id="error">{error.size}</div>
                </label>

                <label className="toppings">Toppings:
                <div id="toppings">
                    <label>
                    <input type="checkbox" name="pepps" onChange={onChange} checked={form.pepps}/>
                    Pepps
                    </label>
                    <label>
                    <input type="checkbox" name="jpepps" onChange={onChange} checked={form.jpepps}/>
                    Jalapeno Pepps
                    </label>
                    <label>
                    <input type="checkbox" name="gpepps" onChange={onChange} checked={form.gpepps}/>
                    Green Pepps
                    </label>
                    <label>
                    <input type="checkbox" name="bpepps" onChange={onChange} checked={form.bpepps}/>
                    Banana Pepps
                    </label>
                </div>
                </label>

                <label>Special Instructions:
                    <input type="text" name="specialInstructions" onChange={onChange} value={form.specialInstructions} placeholder="Any requests?"/>
                </label>

                <button disabled={disabled} id="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form;