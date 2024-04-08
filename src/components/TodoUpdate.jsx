import React, { useRef, useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
    const { updateDescription, onInputChange } = useForm({
        updateDescription: todo.description,
    });

    const [disabled, setDisabled] = useState(true);
    const focusInputRef = useRef();

    useEffect(() => {
        if (!disabled) {
            focusInputRef.current.focus();
        }
    }, [disabled]);

    const onSubmitUpdate = e => {
        e.preventDefault();

        const id = todo.id;
        const description = updateDescription;

        handleUpdateTodo(id, description);

        setDisabled(!disabled);
    };

    return (
        <form onSubmit={onSubmitUpdate}>
            <input
                type='text'
                className={`input-update ${
                    todo.done ? 'text-decoration-dashed' : ''
                }`}
                name='updateDescription'
                value={updateDescription}
                onChange={onInputChange}
                placeholder='¿Qué hay que hacer?'
                readOnly={disabled}
                ref={focusInputRef}
            />

            <button className='btn-edit' type='submit'>
                <FaEdit />
            </button>
        </form>
    );
};
