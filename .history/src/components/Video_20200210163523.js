import React from "react"
import styled from "styled-components";

const Video = styled.video`
	width: 100%;
`;

export default (props) => (
	<Video {...props} />
)