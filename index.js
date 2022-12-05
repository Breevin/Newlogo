{

    Path={Start}

  for(y=1 to N)(Every station in the path)

  {

    if(y is the Starting Station)

    D[y]=0  //Distance is zero

    else if(y is a nearby station)

    D[y]=C[Start][y] //Cost between the starting station and the neighbor station

    else

    D[y]=infinitive //If the station have no direct train

  }

  repeat

  {

    find a station with D[w] minimum

    Path=Path V{w} //Add the station to the path

    for(every station x, which is a neighbor) //check any nearest station having least distance and add to the path

    {

    D[x]= min{ D[x], D[w]+C[w][x]

    }

  }

  until ()

  {

    All station

  }
