<style>
    nav {
        background-color: rgb(39, 39, 39);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 3rem;
        box-shadow: 0 0 1rem rgb(39, 39, 39);
    }

    form {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 20%;
    }
    button{
        background-color: rgb(100, 100, 100);
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: ease .5s;
        border-radius: 100vw;
        box-shadow: 0 0 .5rem rgb(29, 29, 29);
    }
    input {
        background-color: rgb(82, 82, 82);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 100vw;
        border: none;
        margin-right: 1rem;
        box-shadow: 0 0 .5rem rgb(29, 29, 29);
    }
    button:hover {
        background-color: rgb(82, 82, 82);
    }
</style>

<nav>
    <form action="">
        <input type="text">
        <button>Filter</button> 
        <!--This is a drop down that lets you choose to filter between if 
            theyre rated, reviewd, track rated, ep, single, album, etc, etc-->
    </form>

    <div>
        <button>User</button>
    </div>
</nav>

<slot></slot>