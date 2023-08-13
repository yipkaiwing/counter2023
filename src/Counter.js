const Counter = ({ value, onValueChanged }) => {

    const increment = () => {
        onValueChanged(1);
    }

    const decrement = () => {
        onValueChanged(-1);
    }

 return (
    // <div className=" bg-white w-full max-w-md rounded-xl shadow-xl overflow-hidden">
    <div className= {` ${value === 0 && ' bg-white'} ${value >0 && 'bg-green-300'} ${value < 0 && 'bg-red-300'} w-full max-w-md rounded-xl shadow-xl overflow-hidden`}>
        <h1 className=" text-6xl font-semibold text-center text-gray-800 py-6">
            {value}
        </h1>
        <div className=" flex">
            <button
                onClick={decrement}
                className=" bg-blue-600 py-2 font-mono text-center flex-1 text-3xl text-white hover:bg-blue-700"    
            >
                -
            </button>
            <button
                onClick={increment}
                className=" bg-blue-500 py-2 font-mono text-center flex-1 text-3xl text-white hover:bg-blue-700"    
            >
                +
            </button>
        </div>
    </div>
 );
};

export default Counter;