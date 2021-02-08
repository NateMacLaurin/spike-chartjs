import FamousPerson from '../FamousPerson/FamousPerson.jsx'

function FamousPersonList ({famousPeopleArray}) {
    return (
        <ul>
            {famousPeopleArray.map(person => 
            (<FamousPerson key={person.id} person={person} />)
            )}
        </ul>
    )
}

export default FamousPersonList