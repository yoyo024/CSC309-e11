
"use client";
export default function Grid() {
    return (
        <div id="grid" className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            <div className="card bg-white border-2 border-solid border-black custom-rounded shadow-lg p-4 hover:shadow-2xl">
                <a className="card-image" href="https://plus.unsplash.com/premium_photo-1714051660720-888e8454a021?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" target="_blank" rel="noopener noreferrer">
                    View Image
                </a>
                <h2 className="card-title">New York City</h2>
                <p className="card-description">The city that never sleeps, known for its iconic skyline, Times Square, and Central Park.</p>
            </div>

            <div className="card bg-white border-2 border-solid border-black custom-rounded shadow-lg p-4 hover:shadow-2xl">
                <a className="card-image" href="https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=3020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" target="_blank" rel="noopener noreferrer">
                    View Image
                </a>
                <h2 className="card-title">Paris</h2>
                <p className="card-description">The capital of France, famous for the Eiffel Tower, art, and romantic ambiance.</p>
            </div>

            <div className="card bg-white border-2 border-solid border-black custom-rounded shadow-lg p-4 hover:shadow-2xl">
                <a className="card-image" href="https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" target="_blank" rel="noopener noreferrer">
                    View Image
                </a>
                <h2 className="card-title">Tokyo</h2>
                <p className="card-description">A bustling metropolis blending modern skyscrapers with traditional temples.</p>
            </div>

            <div className="card bg-white border-2 border-solid border-black custom-rounded shadow-lg p-4 hover:shadow-2xl">
                <a className="card-image" href="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" target="_blank" rel="noopener noreferrer">
                    View Image
                </a>
                <h2 className="card-title">London</h2>
                <p className="card-description">The capital of England, known for its historic landmarks like Big Ben and the Tower of London.</p>
            </div>

            <div className="card bg-white border-2 border-solid border-black custom-rounded shadow-lg p-4 hover:shadow-2xl">
                <a className="card-image" href="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" target="_blank" rel="noopener noreferrer">
                    View Image
                </a>
                <h2 className="card-title">Sydney</h2>
                <p className="card-description">A vibrant city famous for its Sydney Opera House and beautiful harbor.</p>
            </div>

            <div className="card bg-white border-2 border-solid border-black custom-rounded shadow-lg p-4 hover:shadow-2xl">
                <a className="card-image" href="https://plus.unsplash.com/premium_photo-1661943659036-aa040d92ee64?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" target="_blank" rel="noopener noreferrer">
                    View Image
                </a>
                <h2 className="card-title">Dubai</h2>
                <p className="card-description">A modern city known for its ultramodern architecture, luxury shopping, and lively nightlife.</p>
            </div>

            <div className="card bg-white border-2 border-solid border-black custom-rounded shadow-lg p-4 hover:shadow-2xl">
                <a className="card-image"  href="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=3392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" target="_blank" rel="noopener noreferrer">
                    View Image
                </a>
                <h2 className="card-title">Rome</h2>
                <p className="card-description">The capital of Italy, rich in history with landmarks like the Colosseum and the Vatican.</p>
            </div>

            <div className="card bg-white border-2 border-solid border-black custom-rounded shadow-lg p-4 hover:shadow-2xl">
                <a className="card-image" href="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" target="_blank" rel="noopener noreferrer">
                    View Image
                </a>
                <h2 className="card-title">Barcelona</h2>
                <p className="card-description">A city in Spain known for its art, architecture, and vibrant street life.</p>
            </div>
        </div>
    );
}
