export default function Loader() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex space-x-2">
                <span className="w-2 h-2 rounded-full bg-point animate-bounce"></span>
                <span className="w-2 h-2 bg-point rounded-full animate-bounce [animation-delay:-0.2s]"></span>
                <span className="w-2 h-2 bg-point rounded-full animate-bounce [animation-delay:-0.4s]"></span>
            </div>
        </div>
    );
}
