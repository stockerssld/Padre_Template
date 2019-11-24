import propTypes from 'prop-types'

export default function Body({children}){
    return children
}

Body.propTypes={
    children: propTypes.element.isRequired
}
