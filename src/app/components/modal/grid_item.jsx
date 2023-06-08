import { Box, Text, LinkOverlay, LinkBox, Image } from "@chakra-ui/react";

import "./grid_item.css";

export const WorkGridItem = ({ href, title, thumbnail }) => (
  <Box className="grid_item_main">
    <LinkBox className="grid_item">
      <Image
        className="grid_item_image"
        src={thumbnail}
        alt={title}
        placeholder="blur"
      />
      <LinkOverlay href={href} target="_blank">
        <Text>{title}</Text>
      </LinkOverlay>
    </LinkBox>
  </Box>
);
