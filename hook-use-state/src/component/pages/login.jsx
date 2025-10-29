import { useState } from 'react';
import { Formik } from 'formik';

export default function Login() {
    const [form, setForm] = useState({
        username: '',
        password: '',
        role: 'user',
        note: '',
        avatar: 'avatar.png'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    // ham file
    const handleAvatarChange = (e) => {
        console.log(e.target.files);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        if (form.username === 'admin' && form.password === 'admin') {
            alert('Đăng nhập thành công!');
        } else {
            alert('Đăng nhập thất bại!');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 40 }}>
            <form onSubmit={handleSubmit} style={{ width: 320 }}>
                <h1>Login</h1>

                <div style={{ marginBottom: 12 }}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={form.username}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div style={{ marginBottom: 12 }}>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="form-control"
                    />

                </div>
                <br />
                <div>
                    <label htmlFor="role">Vai tro</label>
                    <select name="role" id="role" value={form.role}
                        onChange={handleChange}>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="guest">Guest</option>
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor="note">Ghi chu</label>
                    <textarea
                        id="note"
                        name="note"
                        rows={4}
                        value={form.note}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="avatar">Avatar</label>
                    <input
                        id="avatar"
                        name="avatar"
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        className="form-control"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>

            </form>
        </div>
    );
}