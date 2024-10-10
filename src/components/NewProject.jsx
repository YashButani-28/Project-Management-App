import Input from "./Input.jsx"
import Model from "./Model.jsx"

import {useRef} from 'react';

export default function NewProject({onAdd,onCancel}){
const modal=useRef()

    const Title=useRef();
    const Description=useRef();
    const DueDate=useRef();

    function handleSave(){
        const enteredTitle=Title.current.value;
        const enteredDescription=Description.current.value;
        const enteredDueDate=DueDate.current.value;

        if(enteredTitle.trim()===""||enteredDescription.trim()===""||enteredDueDate.trim()===""){
            modal.current.open();
            return;
        }

onAdd({
    Title:enteredTitle,
    Description:enteredDescription,
    DueDate:enteredDueDate
})
    }

    return(
    <>
        <Model ref={modal} buttonCaption="Okey">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value.</p>
            <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
            </Model>

        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
                <li><button className="py-2 px-6 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>

            </menu>
            <div>
            <Input type="text" ref={Title} label="Title" />
            <Input ref={Description} label="Description" textarea/>
            <Input type="date" ref={DueDate} label="Due Date" />

            </div>
        </div>
        </>
    )

}