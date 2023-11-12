
// eslint-disable-next-line react/prop-types
export default function ReactCounter({count, onClick}) {

   return  <div className="card">
               React: <button onClick={onClick}>
                    count is {count}
                </button>
            </div>
}