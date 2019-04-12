import styled from "styled-components";
import { Box } from "../Box/Box";

/**
 * Компонент текста
 * @example ./Text.example.md
 */
export const Text = styled(Box)`
  cursor: pointer;
`;

Text.defaultProps = {
  color: "#333333"
};

export default Text;
