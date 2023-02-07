import {ChangeEvent} from "react";

//COMPONENTS
    //TodoItemBar
        export interface ItemBarProps {
            saveTodo():void;
            inputValue: string;
            handleInputChange(e: ChangeEvent<HTMLInputElement>):void;
        }
    //TodoListItem
        export interface ListItemProps {
            deleteTodo():void;
            message: string;
        }


//PAGES
    //TodoPage
        export interface TodoList {
            id: number;
            message: string;
        }