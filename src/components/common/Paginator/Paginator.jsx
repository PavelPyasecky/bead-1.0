import React, {useState} from 'react';
import s from '../Paginator/Paginator.module.css';


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(totalItemsCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionItemNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionItemNumber = portionNumber * portionSize

    return (
        <div>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}

            {
                pages.filter(pageNumber => pageNumber >= leftPortionItemNumber && pageNumber <= rightPortionItemNumber)
                    .map(pageNumber => {
                        return (
                            <span
                                className={currentPage === pageNumber ? `${s.selectPage} ${s.pageNumber}` : s.pageNumber}
                                onClick={(e) => {
                                    onPageChanged(pageNumber)
                                }}>{pageNumber}
                        </span>
                        )
                    })
            }

            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>
    )
}

export default Paginator;
