function FamousPersonForm ({
    famousPersonName,
    famousPersonRole,
    setPersonName,
    setPersonRole,
    addPerson
}) {
    return (
        <form onSubmit={addPerson}>
        <label htmlFor="name-input">Name:</label>
        <input id="name-input" value={famousPersonName} onChange={e => setPersonName(e.target.value)} />
        <label htmlFor="role-input">Famous for:</label>
        <input id="role-input" value={famousPersonRole} onChange={e => setPersonRole(e.target.value)} />
        <button type="submit" onClick={addPerson}>Done</button>
      </form>
    )
}

export default FamousPersonForm