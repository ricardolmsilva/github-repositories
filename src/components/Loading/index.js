import React from 'react'
import PropTypes from 'prop-types'
import { FaSpinner } from 'react-icons/fa'

import Container from './styles'

export default function Spinner({ loading }) {
  return (
    <Container loading={loading ? 1 : 0}>
      <FaSpinner />
    </Container>
  )
}

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
}
