import './Executives.css'
import ExecutivesData from '../../assets/data/executives.json'

type ExecutivesType = {
    img: string,
    name: string,
    post: string,
    department: string,
    batch: string
}

const SinglePerson = ({exec}:{exec: ExecutivesType}) => {   
  return (
    <div className="person">
        <img src={exec.img} alt={exec.name}/>
        <div className="shoulder">
        <p className="name">{exec.name}</p>
        <p className="position">{exec.post}</p>
        <hr className="hr-two" />
        <p>Bachelors in {exec.department}</p>
        <p>Pulchowk Campus</p>
        <p>Batch {exec.batch}</p>
        </div>
    </div>
  );
};

const renderExecutives = (executives: ExecutivesType[]) => {
  const rows = [];
  for (let i = 0; i < executives.length; i += 3) {
    const batch = executives.slice(i, i + 3);
    const row = (
      <div className="row" key={i / 3}>
        {batch.map((exec, index) => (
          <SinglePerson exec={exec} key={index} />
        ))}
      </div>
    );
    rows.push(row);
  }
  return rows;
};

export default function Executives() {
    return (
        <div className="content3" data-section='team'>
              <p className="heading">The Executive Team</p>
                {
                    renderExecutives(ExecutivesData)
              }
        </div>
    )
}