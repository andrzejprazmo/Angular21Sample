using Angular21.Api.Domain;
using Microsoft.AspNetCore.Mvc;

namespace Angular21.Api.Api;

public static class PersonEndpoints
{
    static readonly PersonListDto PersonList = new PersonListDto
    {
        PersonList =
            [
                new PersonDto { Id = 1, FirstName = "John", LastName = "Doe", BirthDate = new DateTime(1990, 1, 1), City = "New York" },
                new PersonDto { Id = 2, FirstName = "Jane", LastName = "Smith", BirthDate = new DateTime(1985, 5, 15), City = "Los Angeles" },
                new PersonDto { Id = 3, FirstName = "Michael", LastName = "Johnson", BirthDate = new DateTime(1978, 10, 30), City = "Chicago" },
            ]
    };

    [ProducesResponseType(200, Type = typeof(PersonListDto))]
    public static IResult GetAllPersons()
    {
        return Results.Ok(PersonList);
    }

    [ProducesResponseType(200, Type = typeof(PersonListDto))]
    public static IResult FindPersons(SearchCriteriaDto criteria)
    {
        var filteredPersons = PersonList.PersonList.Where(p =>
            (string.IsNullOrEmpty(criteria.FirstName) || p.FirstName.Contains(criteria.FirstName)) &&
            (string.IsNullOrEmpty(criteria.LastName) || p.LastName.Contains(criteria.LastName))
        ).ToArray();

        return Results.Ok(new PersonListDto { PersonList = filteredPersons });
    }

    [ProducesResponseType(200, Type = typeof(PersonDto))]
    public static IResult GetPerson(int id)
    {
        var person = PersonList.PersonList.FirstOrDefault(p => p.Id == id);
        if (person == null)
        {
            return Results.NotFound();
        }
        return Results.Ok(person);
    }

    [ProducesResponseType(200, Type = typeof(string))]
    public static IResult GetSessionId()
    {
        return Results.Ok(Guid.NewGuid().ToString());
    }
}
