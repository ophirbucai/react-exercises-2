import React, { useEffect, useState } from 'react';

function Item({item, searchTerm}) {
    const [markedItem, setMarkedItem] = useState();
    useEffect(() => {
        const matches = item.match(new RegExp(searchTerm, 'gi'));
        setMarkedItem(item.replaceAll(matches, "<mark>" + matches + "</mark>"));
    }, [searchTerm]);

    return (
        <li dangerouslySetInnerHTML={{__html: markedItem}} />
    );
}

export default Item;