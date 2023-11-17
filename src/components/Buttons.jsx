import satData from "./components/satData";



const Buttons = ({ filterByType, setSat, displaySats}) => {
  return (
    <div>
      <button>
        {displaySats.map((sat, id) => {
          return (
            <button onClick={() => filterByType(sat)} key={id}>
              {sat} Orbit
            </button>
          );
        })}
      </button> <button>onClick={() => set(Sat)} satData(setSat)
 </button>
      <button>Low Orbit</button>
      <button>Medium Orbit</button>
      <button>High Orbit</button>
      <button>All Orbits</button>
    </div>
  );
};

export default Buttons;
