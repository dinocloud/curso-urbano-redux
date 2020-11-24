import React, { useState } from 'react';

interface InputProps {
    addTask: (e: any, task: string) => void;
}

const Input: React.FC<InputProps> = ({
    addTask
}) => {
    
    const [text, setText] = useState<string>('');

    return (
        <form onSubmit={(e) => { addTask(e, text); setText('') }}>
            <input
            value={text}
            type="text"
            placeholder="Ingrese su tarea"
            onChange={(e) => setText(e.target.value) }
            />
        </form>
    )
}

export default Input;