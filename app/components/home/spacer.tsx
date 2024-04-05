
function Spacer(height: string, color: string) {
    return <div className={`${height}`}
    style={{
        backgroundColor: color,
    }}/>;
}

export default Spacer;