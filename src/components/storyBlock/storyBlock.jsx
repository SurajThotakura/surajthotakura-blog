import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const StoryLine = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6rem;
`;

const StoryImage = styled.img`
  transform: scale3d(0.6, 0.6, 1);
  opacity: 0;
  transition: 600ms ease;
  filter: blur(8px);

  &.show {
    opacity: 1;
    filter: blur(0);
    transform: scale3d(1, 1, 1);
  }
`;

const StoryBlock = ({ storyLine }) => {
  const storyRefArray = useRef([]);

  const callbackFunction = (entries) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle("show", entry.isIntersecting);
        observer.unobserve(entry.target);
      }
    });
  };

  const options = {
    rootMargin: "-150px",
    threshold: 1,
  };

  const observer = new IntersectionObserver(callbackFunction, options);

  useEffect(() => {
    storyRefArray.current.forEach((ref) => {
      observer.observe(ref);
    });
  }, [storyRefArray.current, options]);

  return (
    <StoryLine>
      {storyLine.map((story, index) => {
        return (
          <StoryImage
            ref={(ref) => {
              storyRefArray.current[index] = ref;
            }}
            key={index}
            index={index}
            src={story.src}
            alt={story.alt}
          />
        );
      })}
    </StoryLine>
  );
};

export default StoryBlock;
