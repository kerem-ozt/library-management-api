PGDMP                     
    |            library    14.9    14.9 )               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    66727    library    DATABASE     l   CREATE DATABASE library WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United Kingdom.1252';
    DROP DATABASE library;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    66741    Books    TABLE     �   CREATE TABLE public."Books" (
    id integer NOT NULL,
    name character varying(255),
    average_rating numeric,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Books";
       public         heap    postgres    false    3            �            1259    66740    Books_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Books_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Books_id_seq";
       public          postgres    false    213    3                       0    0    Books_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Books_id_seq" OWNED BY public."Books".id;
          public          postgres    false    212            �            1259    66750    Borrows    TABLE     1  CREATE TABLE public."Borrows" (
    id integer NOT NULL,
    user_id integer NOT NULL,
    book_id integer NOT NULL,
    borrow_date timestamp with time zone,
    return_date timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Borrows";
       public         heap    postgres    false    3            �            1259    66749    Borrows_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Borrows_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Borrows_id_seq";
       public          postgres    false    215    3                       0    0    Borrows_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Borrows_id_seq" OWNED BY public."Borrows".id;
          public          postgres    false    214            �            1259    66767    Ratings    TABLE       CREATE TABLE public."Ratings" (
    id integer NOT NULL,
    book_id integer NOT NULL,
    user_id integer NOT NULL,
    rating numeric,
    rating_date timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Ratings";
       public         heap    postgres    false    3            �            1259    66766    Ratings_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Ratings_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Ratings_id_seq";
       public          postgres    false    3    217                       0    0    Ratings_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Ratings_id_seq" OWNED BY public."Ratings".id;
          public          postgres    false    216            �            1259    66728    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false    3            �            1259    66734    Users    TABLE     �   CREATE TABLE public."Users" (
    id integer NOT NULL,
    name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Users";
       public         heap    postgres    false    3            �            1259    66733    Users_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Users_id_seq";
       public          postgres    false    211    3                       0    0    Users_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;
          public          postgres    false    210            p           2604    66744    Books id    DEFAULT     h   ALTER TABLE ONLY public."Books" ALTER COLUMN id SET DEFAULT nextval('public."Books_id_seq"'::regclass);
 9   ALTER TABLE public."Books" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    213    213            q           2604    66753 
   Borrows id    DEFAULT     l   ALTER TABLE ONLY public."Borrows" ALTER COLUMN id SET DEFAULT nextval('public."Borrows_id_seq"'::regclass);
 ;   ALTER TABLE public."Borrows" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            r           2604    66770 
   Ratings id    DEFAULT     l   ALTER TABLE ONLY public."Ratings" ALTER COLUMN id SET DEFAULT nextval('public."Ratings_id_seq"'::regclass);
 ;   ALTER TABLE public."Ratings" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            o           2604    66737    Users id    DEFAULT     h   ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);
 9   ALTER TABLE public."Users" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211                      0    66741    Books 
   TABLE DATA           U   COPY public."Books" (id, name, average_rating, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    213   -                 0    66750    Borrows 
   TABLE DATA           m   COPY public."Borrows" (id, user_id, book_id, borrow_date, return_date, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   �-                 0    66767    Ratings 
   TABLE DATA           h   COPY public."Ratings" (id, book_id, user_id, rating, rating_date, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   .                 0    66728    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    209   �.                 0    66734    Users 
   TABLE DATA           E   COPY public."Users" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    211   �.                   0    0    Books_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Books_id_seq"', 3, true);
          public          postgres    false    212            !           0    0    Borrows_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Borrows_id_seq"', 6, true);
          public          postgres    false    214            "           0    0    Ratings_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Ratings_id_seq"', 3, true);
          public          postgres    false    216            #           0    0    Users_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Users_id_seq"', 3, true);
          public          postgres    false    210            x           2606    66748    Books Books_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Books"
    ADD CONSTRAINT "Books_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Books" DROP CONSTRAINT "Books_pkey";
       public            postgres    false    213            z           2606    66755    Borrows Borrows_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Borrows"
    ADD CONSTRAINT "Borrows_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Borrows" DROP CONSTRAINT "Borrows_pkey";
       public            postgres    false    215            |           2606    66774    Ratings Ratings_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Ratings"
    ADD CONSTRAINT "Ratings_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Ratings" DROP CONSTRAINT "Ratings_pkey";
       public            postgres    false    217            t           2606    66732     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    209            v           2606    66739    Users Users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    211            ~           2606    66761    Borrows Borrows_book_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Borrows"
    ADD CONSTRAINT "Borrows_book_id_fkey" FOREIGN KEY (book_id) REFERENCES public."Books"(id);
 J   ALTER TABLE ONLY public."Borrows" DROP CONSTRAINT "Borrows_book_id_fkey";
       public          postgres    false    215    3192    213            }           2606    66756    Borrows Borrows_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Borrows"
    ADD CONSTRAINT "Borrows_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id);
 J   ALTER TABLE ONLY public."Borrows" DROP CONSTRAINT "Borrows_user_id_fkey";
       public          postgres    false    215    211    3190                       2606    66775    Ratings Ratings_book_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Ratings"
    ADD CONSTRAINT "Ratings_book_id_fkey" FOREIGN KEY (book_id) REFERENCES public."Books"(id);
 J   ALTER TABLE ONLY public."Ratings" DROP CONSTRAINT "Ratings_book_id_fkey";
       public          postgres    false    217    213    3192            �           2606    66780    Ratings Ratings_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Ratings"
    ADD CONSTRAINT "Ratings_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id);
 J   ALTER TABLE ONLY public."Ratings" DROP CONSTRAINT "Ratings_user_id_fkey";
       public          postgres    false    211    217    3190               k   x��̭�  �|<����T���m�L	�y�[���!�Gڣy��ӹ�1_��2�
QY#�w��l�[������"�`����Z����X@��?�7����Q-�         t   x����� k<E�dc~a�L��s�B���zw��Ƣe�T�@�}N�Q~k��4�AW�)s0)yV��&�6M���j��6M��ɵ��ޖ{��+W�j�*�~! ��mY         Z   x�����0k3����ϒ��I�*�u_�I��IH+��`hU����v��G���r��ULEV��Xٶ��Ȭ�$�V��eS�#D�Պ/�         R   x�3202101�046254�M.JM,I�--N-*��*�2�K��ä���ѥ�L-�EE���
�&�%�d楃��qqq ��%�         F   x�3�����Sp�O�4202�54�56P0��2��26�3�0�60�#�e�镘�J�Ɯ�9�������� ��'�     