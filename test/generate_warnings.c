x;

bad_code(float n) {

    int small[3];

    char index = 10;

    x = small[index];

    return bad_code(x);
}


main() {

    printf("%f %s", bad_code(1.0f));
}