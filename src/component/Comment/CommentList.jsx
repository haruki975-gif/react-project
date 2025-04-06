import axios from "axios";
import {
   CommentAuthor,
   CommentContainer,
   CommentContent,
   CommentDate,
   CommentItem,
   Container,
} from "../styles/Styles";
import { useState, useEffect } from "react";

const CommentList = ({ boardNo, success }) => {
   const [comments, setComments] = useState([]);

   useEffect(() => {
      axios
         .get(`http://localhost/comments?boardNo=${boardNo}`)
         .then((response) => {
            setComments([...response.data]);
         });
   }, [success]);
   return (
      <CommentContainer>
         {comments.length === 0 ? (
            <CommentItem>
               <CommentAuthor>댓글이</CommentAuthor>
               <CommentContent>하나도</CommentContent>
               <CommentDate>없어요</CommentDate>
            </CommentItem>
         ) : (
            comments.map((comment) => (
               <CommentItem>
                  <CommentAuthor>{comment.commentWriter}</CommentAuthor>
                  <CommentContent>{comment.commentContent}</CommentContent>
                  <CommentDate>{comment.createDate}</CommentDate>
               </CommentItem>
            ))
         )}
      </CommentContainer>
   );
};
export default CommentList;
