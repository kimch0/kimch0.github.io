import { Col } from "react-bootstrap"

function ProjectCards({ title, imgUrl, url }) {
    return (
        <Col sm={6} md={4}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={imgUrl} alt={title} style={{ borderRadius: '30px' }} />

            </a>
        </Col>
    )
}

export default ProjectCards