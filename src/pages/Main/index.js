import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FaGithubAlt,
  FaPlus,
  FaSpinner,
  FaTrashAlt,
  FaArrowCircleRight,
} from 'react-icons/fa'

import api from '../../services/api'

import Container from '../../components/Container'
import { Form, SubmitButton, List } from './styles'

export default function Main() {
  const [search, setSearch] = useState()
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const localRepositories = localStorage.getItem('repositories')
    if (localRepositories) {
      setRepositories(JSON.parse(localRepositories))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('repositories', JSON.stringify(repositories))
  }, [repositories])

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!search) {
      return
    }

    setLoading(true)

    try {
      const { data } = await api.get(`/repos/${search}`)

      const response = {
        name: data.full_name,
        url: data.html_url,
      }

      setRepositories([...repositories, response])
      setLoading(false)
    } catch {
      setLoading(false)
    }
  }

  const handleDelete = (repoToDelete) => {
    setRepositories(
      repositories.filter((repository) => repository.name !== repoToDelete)
    )
  }

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositories
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="user/repository"
          onChange={handleInputChange}
        />
        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? <FaSpinner /> : <FaPlus size={14} />}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map((repository) => (
          <li key={repository.name}>
            <span>
              <FaTrashAlt onClick={() => handleDelete(repository.name)} />
              <span>{repository.name}</span>
            </span>

            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
              <FaArrowCircleRight />
            </Link>
          </li>
        ))}
      </List>
    </Container>
  )
}
