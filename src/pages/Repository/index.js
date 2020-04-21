import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FaArrowCircleLeft } from 'react-icons/fa'

import api from '../../services/api'

import Spinner from '../../components/Loading'
import Container from '../../components/Container'
import { Owner, IssueList } from './styles'

export default function Repository({ match }) {
  const [loading, setLoading] = useState(true)
  const [repository, setRepository] = useState({})
  const [issues, setIssues] = useState([])

  useEffect(() => {
    const repoName = decodeURIComponent(match.params.repository)

    async function fetchData() {
      const [repo, repoIssues] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: 'open',
            per_page: 5,
          },
        }),
      ])

      setRepository(repo.data)
      setIssues(repoIssues.data)
      setLoading(false)
    }

    fetchData()
  }, [match.params.repository])

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <Container>
          <Owner>
            <Link to="/">
              <FaArrowCircleLeft />
              <span>Back</span>
            </Link>

            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <h1> {repository.name} </h1>
            <p> {repository.description} </p>
          </Owner>

          <IssueList>
            {issues.map((issue) => (
              <li key={issue.id}>
                <img src={issue.user.avatar_url} alt={issue.user.login} />
                <div>
                  <strong>
                    <a
                      href={issue.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {issue.title}
                    </a>
                    {issue.labels.map((label) => (
                      <span key={label.id}>{label.name}</span>
                    ))}
                  </strong>
                  <p>{issue.user.login}</p>
                </div>
              </li>
            ))}
          </IssueList>
        </Container>
      )}
    </>
  )
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
}
