import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
const emptyForm = {
  name: "",
  hp: "",
  frontUrl: "",
  backUrl: ""
}

const [form, setForm] = useState(emptyForm)


const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}

const handleSubmit = (e) => {
  e.preventDefault()
const newPokemon = {
  name: form.name,
  hp: parseInt(form.hp),
  sprites: {
    front: form.frontUrl,
    back: form.backUrl,
  },
}

  onAddPokemon(newPokemon)
  setForm(emptyForm)
}
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={form.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={form.hp} onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={form.frontUrl} 
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={form.backUrl} 
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
