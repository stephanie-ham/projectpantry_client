import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import CloseButton from "react-bootstrap/CloseButton";
import { useHistory } from 'react-router-dom';
import { FoodContext } from './FoodProvider';

export const FoodTag = (props) => {

    const { removeTagFromFood } = useContext(FoodContext)
    const history = useHistory()

    const handleRemoveTag = (props) => {
        const tag = {
            tag: parseInt(props.tag.id),
            foodId: parseInt(props.food.id)
        }

        removeTagFromFood(tag)
            .then(() => history.push("/foods"))
    }



    return (
        <div
        className="food__tag tag"
        key={`food-${props.food.id}_tag-${props.tag.id}`}
      >
        <Badge
          pill
          className="pp_badge"
          bg="override">
          {props.tag.label} 
          <CloseButton 
            variant="white"
            id="delete-tag"
            onClick={(evt) => { 
                evt.preventDefault();

                handleRemoveTag(props)
                    
            }}  
          />
        </Badge>{' '}
      </div>
    )
}