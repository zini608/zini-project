import React, { useState } from 'react';
import './PostView.css'; // CSS 파일 임포트
import logo from '../assets/logo.png'; // 로고 이미지 임포트
import postimage from '../assets/postimage.png'; // 로고 이미지 임포트
import WriterInfo from '../pages/PostView/WriterInfo'; // WriterInfo 컴포넌트 임포트

const PostView = () => {
        const [isEditing, setIsEditing] = useState(false);
    
        const handleEdit = () => {
            setIsEditing(true);
        };
    
        const handleDelete = () => {
            // 삭제 로직 추가 (예: API 호출)
            alert("포스트가 삭제되었습니다.");
        };

    return (
        <div className="post-view">
            <header className="header">
                <img src={logo} alt="Logo" className="logo" />
                <div className="writer-info">
                    <WriterInfo /> {/* 작성자 ID와 공개/비공개 정보 표시 */}
                </div>
                <h1 className="post-title">인천 앞바다에서 무려 60cm 월척을 낚다!</h1>
                <div className="action-buttons">
                    <button onClick={handleEdit} className="edit-button">추억 수정하기</button>
                    <button onClick={handleDelete} className="delete-button">추억 삭제하기</button>
                </div>
            </header>
            {isEditing && (
                <div className="edit-module">
                    {/* 글 작성 모듈 */}
                    <textarea placeholder="수정할 내용을 입력하세요..." rows="4"></textarea>
                    <button className="save-button">저장하기</button>
                    <button onClick={() => setIsEditing(false)} className="cancel-button">취소</button>
                </div>
            )}
            <div className="post-info">
                <span className="author">작성자: 당신이름</span>
                <span className="date">24.01.19</span>
                <span className="views">조회수: 120</span>
                <span className="comments">댓글: 8</span>
            </div>
            <img src={postimage} alt="PostImage" className="postimage" />
            <p className="post-content">
                인천 앞바다에서 찌를 남겼습니다! \n 가자미가 기어오르는 걸 보며 정말 행복했어요...
            </p>
            <div className="comments-section">
                <h2>댓글</h2>
                <div className="comment">유재석: 24.01.18 21:50 - 유 60cm 월척이네요! 진짜 기절할 것 같아요~</div>
                <div className="comment">김영희: 24.01.18 21:50 - 무기 60cm 월척을 잡다니... 대단해요!</div>
                <button className="add-comment-button">댓글 등록하기</button>
            </div>
        </div>
    );
};

export default PostView;
