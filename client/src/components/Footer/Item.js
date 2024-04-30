function Item({ arr }) {
    return <>
        {arr.map((el, i) => <p key={i}>{el}</p>)}
    </>
}


export default Item