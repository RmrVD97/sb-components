/// <reference types="react" />
import './MyLabel.css';
export interface MyLabelProps {
    /**
  * Text content of the label | string
  */
    label: string;
    /**
  * Font-size of the text content of the label | string | Default 'normal'
  */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
  * Capitalization of letters
  */
    allcaps?: boolean;
    /**
  * color of letters
  */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
 * selectable color
 */
    customColor?: string;
    /**
* bg color
*/
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allcaps, customColor, backgroundColor, }: MyLabelProps) => JSX.Element;
