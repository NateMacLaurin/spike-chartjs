function FamousPerson ({person}) {
    return (
        <li key={person.id}>{person.name} is famous for {person.role}</li>
    )
}

export default FamousPerson