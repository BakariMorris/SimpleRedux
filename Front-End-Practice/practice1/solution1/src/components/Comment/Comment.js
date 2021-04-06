const Comment = props => {

    const parentStyle = {
        display: 'block',
        padding: '10px',
        border: '2px #3f3f3f solid',
        boxSizing: 'border-box',
        margin: '10px 0'
    }

    const iconStyle = {
        marginRight: '8px'
    }

    return(
        <div style={parentStyle}>
            <p>{props.message}</p>
            <div >
                <i style={iconStyle} onClick={props.reply}  class="fas fa-reply"></i>
                <i style={iconStyle} onClick={props.delete} class="fas fa-trash"></i>
            </div>
        </div>
    );

}

export default Comment;