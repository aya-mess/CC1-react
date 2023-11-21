import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SuperstarComponent = () => {
    const [todoList, setTodoList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=10`);
                setTodoList(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTodos();
    }, [currentPage]);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className="SuperstarApp">
            <h1 className='h1'>pagination</h1>
            <ul className='ul'>
                {todoList.map(todo => (
                    <li className='li' key={todo.id}>{todo.title}</li>
                ))}
            </ul>
            <button onClick={goToPreviousPage} className='button'>Précédent</button>
            <button onClick={goToNextPage} className='button'>Suivant</button>
        </div>
    );
};

export default SuperstarComponent;