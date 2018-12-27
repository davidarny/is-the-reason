import PropTypes from "prop-types";

export function Suspense(props) {
    if (props.loading) {
        return props.fallback();
    }
    return props.children;
}

Suspense.propTypes = {
    loading: PropTypes.bool.isRequired,
    fallback: PropTypes.func.isRequired,
};
