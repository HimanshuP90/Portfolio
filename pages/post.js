import Layout from  '../components/Layout';
import { withRouter } from 'next/router'

const Post = ({ router }) => (
    <Layout title={router.query.title}>
        <p style={{ width: "80vw" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est expedita voluptatibus quaerat, asperiores, vitae mollitia tempore provident explicabo voluptas autem beatae in, nisi reiciendis error tenetur ratione vero aperiam eos!
        Id itaque consequuntur, voluptatum illo qui tempora veniam ea unde tempore mollitia harum facere dolore ipsam, magni aspernatur, eius ullam commodi suscipit porro architecto fuga corporis dolorem minus. Dolorum, itaque.
        Fugiat libero odit aliquam facilis dolor, eius similique adipisci voluptas iure voluptatibus aliquid nemo temporibus praesentium perferendis, odio provident quisquam ex! Aliquid, reiciendis! Quia porro rerum, fugiat tempora facere neque.</p>
    </Layout>
);

export default withRouter(Post);