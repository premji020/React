import React from 'react';


const Pagination = ({postsPerPage,totalPosts,paginate}) =>{
    const pageNumbers = [];

    for(let i=1;i<= Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
        {pageNumbers.map((element) =>{
            return(
            <li key={element} className="page-item">
                <a onClick={()=> paginate(element)} href="*#" className="page-link">
                    {element}
                </a>
            </li>
            )
        })}
         </ul>
        </nav>
    )
}

export default Pagination;