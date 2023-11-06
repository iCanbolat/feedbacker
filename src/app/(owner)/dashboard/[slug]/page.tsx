import React from 'react'

type Props = {
  params: {
    slug: string
  }
}

const ProductDashboard = ({ params: { slug } }: Props) => {
  return (
    <div>ProductDashboard</div>
  )
}

export default ProductDashboard