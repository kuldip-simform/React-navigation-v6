import { Animated } from 'react-native';

const config = {
  animation: 'timing',
  config: { duration: 350 },
};

const transitionSpec = {
  open: config,
  close: config,
};

export const leftToRightAnimation = {
  transitionSpec,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: ({ current, next, layouts }) => {
    const translateXForCurrent = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [-layouts.screen.width, 0],
    });
    let translateXForNext = 1;
    if (next) {
      translateXForNext = next.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, layouts.screen.width],
      });
    }

    const progress = Animated.add(current.progress, next?.progress || 0);
    const opacity = progress.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    });

    return {
      cardStyle: {
        transform: [
          { translateX: translateXForCurrent },
          { translateX: translateXForNext },
        ],
        opacity,
        marginLeft: -1,
      },
    };
  },
};

export const rightToLeftAnimation = {
  transitionSpec,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: ({ current, next, layouts }) => {
    const translateXForCurrent = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [layouts.screen.width, 0],
    });
    let translateXForNext = 1;
    if (next) {
      translateXForNext = next.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -layouts.screen.width],
      });
    }

    const progress = Animated.add(current.progress, next?.progress || 0);
    const opacity = progress.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    });

    return {
      cardStyle: {
        transform: [
          { translateX: translateXForCurrent },
          { translateX: translateXForNext },
        ],
        opacity,
        marginLeft: -1,
      },
    };
  },
};
