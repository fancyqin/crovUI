import React from 'react';
import { Text } from 'react-native';
import Icon from './Icon';

export const renderNode = (content, props, style) =>
    content == null ? null : React.isValidElement(content) ? (
        content
    ) : (
        <Text {...props} style={[style, props && props.style]}>
        {content}
        </Text>
    );

// export const renderIcon = (content, props, style) =>
//     content == null ? null : React.isValidElement(content) ? (
//         content
//     ) : (
//         <Icon
//         code={props && props.code}
//         color={props && props.color}
//         size={props && props.size}
//         style={style}
//         />
//     );