// eslint-disable-next-line
import style from './Account.scss';
function SearchUser() {
    return (
        <div className="account">
            <img
                src="https://scontent.fhlz4-1.fna.fbcdn.net/v/t39.30808-1/289011925_738867610783080_2684271201560962045_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=i_b7nWHvZ6EAX_Jm_-C&_nc_ht=scontent.fhlz4-1.fna&oh=00_AfAEJYIFHUXQjBFw7ms6ZZ-lhK_LPUSj1xd7YrvtHbKKTQ&oe=63600816"
                alt="avatar"
                className="avatar"
            />
            <div className="account__details">
                <p className="nickname">duongdono</p>
                <p className="account_name">Duong Dono</p>
            </div>
        </div>
    );
}

export default SearchUser;
